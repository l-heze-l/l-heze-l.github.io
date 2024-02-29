/////////////////////////////////////////////////////////////////////
//  Lukas Hezel
//  02/27/24
//  Home-Base JS Code 
/////////////////////////////////////////////////////////////////////

var sidebar = document.getElementById('sidebar');

function showPopup(popupId) {
  var popup = document.getElementById(popupId);
  if (popup) {
      popup.style.display = "block";
      sidebar.style.display = "none";
  }
}

function hidePopup(popupId) {
  var popup = document.getElementById(popupId);
  if (popup) {
      popup.style.display = "none";
      sidebar.style.display = "block";
  }
}