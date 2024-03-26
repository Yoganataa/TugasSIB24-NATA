document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const overlay = document.getElementById("overlay");
    const overlayContent = document.getElementById("overlay-content");
    const form = event.target;

    // get data
    const nama = form.elements.nama.value;
    const email = form.elements.email.value;
    const noHp = form.elements.no_hp.value;
    const jenisKelamin = form.elements.jenis_kelamin.value;
    const prodi = form.elements.prodi.value;
    const hobi = Array.from(form.elements.hobi).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    const alamat = form.elements.alamat.value;

    // overklay
    overlayContent.innerHTML = `
        <p>Terimakasih ${nama} telah mengisi formulir survei ini.</p>
        <p>Data yang diisi:</p>
        <ul>
            <li>Nama: ${nama}</li>
            <li>Email: ${email}</li>
            <li>Nomor Handphone: ${noHp}</li>
            <li>Jenis Kelamin: ${jenisKelamin}</li>
            <li>Prodi: ${prodi}</li>
            <li>Hobi: ${hobi.join(", ")}</li>
            <li>Alamat: ${alamat}</li>
        </ul>
        <p>Silahkan kembali dengan menekan tombol kembali.</p>
        <button onclick="window.location.href='index.html'">Kembali</button>
    `;

    // display overlay
    overlay.style.display = "flex";
});
