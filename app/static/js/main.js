//app/static/js/main.js
document.addEventListener("DOMContentLoaded", function() {

//  window.toggleDetails = function(row) {
//    const contactId = row.dataset.contactId;
//    const detailsRow = document.getElementById('details-' + contactId);
//
//    if (detailsRow.style.display === 'none') {
//        detailsRow.style.display === 'table-row';
//    } else {
//        detailsRow.style.display === 'none';
//    }
//  }


  let selectedRow = null;
  let selectedContactId = null;

  const rows = document.querySelectorAll(".contact-row");
  const editButton = document.getElementById("editButton");

  rows.forEach(row => {
    row.addEventListener("click", function() {
      if (selectedRow) {
        selectedRow.classList.remove("table-active");
      }
      selectedRow = this;
      selectedRow.classList.add("table-active");

      selectedContactId = this.dataset.contactId;

      editButton.href = `edit/${selectedContactId}/`

    });
    row.addEventListener("dblclick", function() {
        const contactId = row.dataset.contactId;
        const detailsRow = document.getElementById('details-' + contactId);

        if (detailsRow.style.display === 'none') {
            detailsRow.style.display === 'table-row';
        } else {
            detailsRow.style.display === 'none';
        }
    }
    }

  });

});