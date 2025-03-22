import { downloadData } from 'aws-amplify/storage';
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";

export const downloadFile = (filename, content) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};

export const downloadPresentacion = (tasacion, solicitantes) => {

    downloadData({
        path: "templates/appartments/PRESENTACION-APARTAMENTO.docx"
    }).result.then(async(data) => {

        let blobDocument = data.body;

        const arrayBuffer = await blobDocument.arrayBuffer();

        const zip = new PizZip(arrayBuffer);
        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        //Modifiy document
        let personaSolicitante = `${solicitantes[0]?.nombre} ${solicitantes[0]?.apellido}`;

        doc.render({
            tipoTasacion: tasacion.tipoTasacion,
            edificioNo: tasacion.edificioNo,
            propietario: tasacion.propietario,
            personaSolicitante: personaSolicitante,
            entidadBancaria: tasacion.entidadBancaria,
            direccionInmueble: tasacion.direccionInmueble,
            fechaTasacion: tasacion.fechaTasacion
        })

        //Download document

        const out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });

        saveAs(out, `Presentacion de tasacion - ${personaSolicitante}.docx`);
    })
    .catch((err) => {
        // Handle any error that occurs in the promise chain
        console.error("Error processing the document or downloading:", err);
        alert("Hubo un error al procesar el documento o descargar el archivo. Intenta nuevamente.");
    });
}

export const downloadInforme = (tasacion) => {

    downloadData({
        path: "templates/appartments/INFORME-APARTAMENTO.docx"
    }).result.then(async(data) => {
        console.log(data);

        let blobDocument = data.body;

        const arrayBuffer = await blobDocument.arrayBuffer();

        const zip = new PizZip(arrayBuffer);
        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        //Modifiy document

        let personaSolicitante = `${tasacion.nombreSolicitante} ${tasacion.apellidoSolicitante}`;

        doc.render({
            fechaTasacion: tasacion.fechaTasacion,
            personaSolicitante: personaSolicitante,
            primerApellido: tasacion.apellidoSolicitante,
            tipoTasacion: tasacion.tipoTasacion,
            edificioNo: tasacion.edificioNo,
            condominio: tasacion.condominio,
            direccionInmueble: tasacion.direccionInmueble
        })

        //Download document

        const out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });

        saveAs(out, `Informe de tasacion - ${personaSolicitante}.docx`);
    })
    .catch((err) => {
        // Handle any error that occurs in the promise chain
        console.error("Error processing the document or downloading:", err);
        alert("Hubo un error al procesar el documento o descargar el archivo. Intenta nuevamente.");
    });
}