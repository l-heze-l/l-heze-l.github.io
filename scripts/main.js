/////////////////////////////////////////////////////////////////////
//  Lukas Hezel
//  02/15/25
//  Home-Base JS Code 
/////////////////////////////////////////////////////////////////////

function showPopup(popupId) {
  var popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "block";
    document.body.classList.add('no-scroll');
  }
}

function hidePopup(popupId) {
  var popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "none";
    document.body.classList.remove('no-scroll');
  }
}

/////////////////////////////////////////////////////////////////////