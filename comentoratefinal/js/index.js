var isUpload;
var filebtn = $('#upload-btn, #filePhoto');
function readURL(filebtn) {
    for (var i = 0; i < filebtn.files.length; i++) {
        if (filebtn.files[i]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var img = $('.uploader img.upload-img');
                img.attr('src', e.target.result);
            }
            reader.readAsDataURL(filebtn.files[i]);
        }
    }
}
$("#upload-btn, #filePhoto").change(function () {
    readURL(this);
});
if (isUpload) {
    var $form = $('.uploader');
    var droppedFiles = false;
    $form.on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    $form.on('dragover dragenter', function () {
      $form.addClass('is-dragover');
    })
      .on('dragleave dragend drop', function () {
      $form.removeClass('is-dragover');
    })
      .on('drop', function (e) {
      droppedFiles = e.originalEvent.dataTransfer.files;
    });

}