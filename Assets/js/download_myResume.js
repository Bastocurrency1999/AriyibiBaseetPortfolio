alert("Hello");

function savePdf(){
    cl_image_tag("../Resume/MyResume.pdf", array("flags" => "attachment"));
    }