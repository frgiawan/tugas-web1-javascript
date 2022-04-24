const tombol = document.querySelector('#tombol');
tombol.addEventListener('click', function(){
    Swal.fire({
        title: 'Data tersimpan',
        text: 'selamat datang di website kita',
        icon : 'success',
        showConfirmButton: false,
        timer : 1800
    });
});