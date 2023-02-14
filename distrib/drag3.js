 var pageContainer = document.querySelector("#pageContainer");
    var activeItem = null;

    var active = false;
    var dragging = false;

    pageContainer.addEventListener("touchstart", dragStart, false);
    pageContainer.addEventListener("touchend", dragEnd, false);
    pageContainer.addEventListener("touchmove", drag, false);

    pageContainer.addEventListener("mousedown", dragStart, false);
    pageContainer.addEventListener("mouseup", dragEnd, false);
    pageContainer.addEventListener("mousemove", drag, false);
	pageContainer.addEventListener("mouseleave", dragEnd, false);
pageContainer.addEventListener("mouseout", drag, false);


    //pageContainer.addEventListener("click", rotateElement, false);

    function dragStart(e) {
      if (e.target !== e.currentTarget) {
        active = true;
        //dragging = false;

        // this is the item we are interacting with
        activeItem = e.target;

        if (activeItem.degrees === undefined) {
          activeItem.degrees = 0;
        }

        if (activeItem !== null) {
          if (!activeItem.xOffset) {
            activeItem.xOffset = 0;
          }

          if (!activeItem.yOffset) {
            activeItem.yOffset = 0;
          }

          if (e.type === "touchstart" ) {
            activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
            activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
          } else {
            activeItem.initialX = e.clientX - activeItem.xOffset;
            activeItem.initialY = e.clientY - activeItem.yOffset;
          }
        }
      }
		
    }

    function dragEnd(e) {
      if (activeItem !== null) {
        activeItem.initialX = activeItem.currentX;
        activeItem.initialY = activeItem.currentY;
      }/**/
		
		dragging = false;
      active = false;
      activeItem = null;
    }

    function drag(e) {
      if (active) {

        dragging = true;

        if (e.type === "touchmove") {
          e.preventDefault();

          activeItem.currentX = e.touches[0].clientX;
          activeItem.currentY = e.touches[0].clientY;
        } else {
          activeItem.currentX = e.clientX - activeItem.initialX;
          activeItem.currentY = e.clientY - activeItem.initialY;
        }

        activeItem.xOffset = activeItem.currentX;
        activeItem.yOffset = activeItem.currentY;

        setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
		  console.log("vit : " + activeItem.currentX )
      }
    }

    function rotateElement(e) {
      if (dragging === false) {

        if (activeItem === null) {
          activeItem = e.target;
        }

        console.log(activeItem.degrees);

        activeItem.degrees += 22.5;
        
        activeItem.querySelector("img").style.transform = `rotate(${activeItem.degrees}deg)`;
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
      //el.querySelector("img").style.transform = `rotate(${degrees}deg)`;
    }