const main = document.querySelector("#main");
const header = document.querySelector("#header");
const files = document.querySelector("#files");
const fileList = document.querySelector("#file-list");
const fileFooter = document.querySelector("#file-footer");
const uploadContainer = document.querySelector("#upload-container");
const uploadForm = document.querySelector("#upload-form");
const fileUpload = document.querySelector("#file-upload");
const submit = document.querySelector("#submit");

submit.addEventListener("click", async (evt) => {
    evt.preventDefault();
    if (fileUpload.files.length === 0) return;

    const fm = new FormData();
    fm.append("file", fileUpload.files[0]);
    try {
        const response = await fetch("http://localhost:8000/file", {
            method: "POST",
            body: fm,
            "Content-Type": "multipart/form-data"
        });
        console.log(response);
    } catch (ex) {
        console.log(ex);
    }
});