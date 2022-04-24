const tombol = document.querySelector('#tombol');
tombol.addEventListener('click', function(login){
    Swal.fire({
        title : 'Akun Terkonfirmasi',
        icon : 'success',
        text : 'selamat datang',
        showConfirmButton: false,
        timer: 1500
    });
});