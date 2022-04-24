const edit = document.querySelector('#edit');
edit.addEventListener('click', function(){
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
        }
    })
});



const hapus = document.getElementById('hapus');
hapus.addEventListener('click', function (){
    Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'red',
    confirmButtonText: 'delete it!'
      })
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('delete!', '', 'success')
        }
      })