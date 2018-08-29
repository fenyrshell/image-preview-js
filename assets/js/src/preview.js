/**
 * ----------------------------------------------------------------------------
 * ImagePreview (v1.0): preview.js
 * Author: Fenyr
 * Licensed under MIT
 * ----------------------------------------------------------------------------
 */

/**
 * ----------------------------------------------------------------------------
 * Select all inputs with the preview attribute.
 * ----------------------------------------------------------------------------
 */

var inputs = document.querySelectorAll('input[preview]');

/**
 * ----------------------------------------------------------------------------
 * Add the change event to the inputs.
 * ----------------------------------------------------------------------------
 * Add the change event to the inputs that have the preview attribute and its
 * respective element, where the element id matches the value of the preview 
 * attribute of the input.
 *  
 * Example.
 *  <input preview="preview_logo">
 *  <div id="previe_logo"></div>
*/

for (let i = 0; i < inputs.length; i++) {

    let input = inputs[i];
    let input_id = input.getAttribute('preview');
    let preview = document.getElementById(input_id);

    if (preview != null) {

        input.addEventListener('change', function(event) {

            let files = event.target.files;

            if (files != null) {

                for (let i = 0; i < files.length; i++) {
                    let image = files[i];
                    if (image.type.startsWith('image/')) {
                        
                        let img = document.createElement('img');
                        let div = document.createElement('div');
                        div.appendChild(img);
                        preview.appendChild(div);

                        let reader = new FileReader();
                        
                        reader.onload = function (event) { 
                            img.src = event.target.result;
                        };
                        
                        reader.readAsDataURL(image);
                    }

                }
            }

        });
    }else {
        console.error('No hay ningun elemento con id: ' + input_id);
    }
}