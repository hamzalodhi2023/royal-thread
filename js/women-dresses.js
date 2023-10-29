/*----------------------------
small images slider started
----------------------------*/

const smallImages = document.querySelectorAll("#photo-change img");

smallImages.forEach(smallImage => {
    smallImage.addEventListener("click", function () {
        let smallImagesParent = smallImage.parentElement;
        let photoChangeDivParent = smallImagesParent.parentElement;
        let photoChangeDivParentSibling = photoChangeDivParent.previousElementSibling;
        let photoChangeDivParentSiblingChild = photoChangeDivParentSibling.children[0];

        photoChangeDivParentSiblingChild.src = smallImage.src;
  })  
});

/*----------------------------
small images slider ended
----------------------------*/

/*----------------------------
filter logic started
----------------------------*/

/*----------------------------
filter logic ended
----------------------------*/
