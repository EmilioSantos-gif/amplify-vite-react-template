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

        doc.render({
            fechaTasacion: tasacion.fechaTasacion,
            personaSolicitante: `${tasacion.nombreSolicitante} ${tasacion.apellidoSolicitante}`,
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

        saveAs(out, "UpdatedDocument.docx");
    });
}