// =================== Top Buttons Active Toggle ===================
document.querySelectorAll(".plate_top_btns a").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".plate_top_btns a").forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// =================== Plate Type Radio Selection Handling ===================
document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('input[name="plateTypes"]');
  function updateCheckedClass() {
    document.querySelectorAll('.frontOrRearOption label').forEach((lbl) => {
      lbl.classList.remove('checked');
    });
    const checkedRadio = document.querySelector('input[name="plateTypes"]:checked');
    if (checkedRadio) {
      checkedRadio.closest('label').classList.add('checked');
      updatePlateDisplay();
    }
  }
  radioButtons.forEach((radio) => {
    radio.addEventListener('change', updateCheckedClass);
  });
  updateCheckedClass();
});

// =================== Show/Hide Plates Based on Radio Selection ===================
const frontPlate = document.getElementById('plate_front');
const rearPlate = document.getElementById('plate_rear');

function updatePlateDisplay() {
  const checkedRadio = document.querySelector('input[name="plateTypes"]:checked');
  const value = checkedRadio ? checkedRadio.dataset.show : '';

  frontPlate.style.display = (value === 'both' || value === 'front') ? 'block' : 'none';
  rearPlate.style.display = (value === 'both' || value === 'rear') ? 'block' : 'none';
}

// =================== Sync Registration Text with Plates ===================
document.addEventListener('DOMContentLoaded', function () {
  const regInput = document.getElementById('reg');
  const frontPlateInput = document.querySelector('#plate_front input');
  const rearPlateInput = document.querySelector('#plate_rear input');
  function syncPlateInputs() {
    frontPlateInput.value = regInput.value;
    rearPlateInput.value = regInput.value;
  }
  regInput.addEventListener('input', syncPlateInputs);
  syncPlateInputs();
});

// =================== Badge Selection & Display Handling ===================
document.addEventListener('DOMContentLoaded', function () {
  const badgeInputs = document.querySelectorAll('input[name="badge"]');
  const badgeHolders = document.querySelectorAll('.badgeHolder');

  badgeInputs.forEach((input) => {
    input.addEventListener('change', function () {
      if (this.value === "0") {
        badgeHolders.forEach(holder => {
          holder.style.display = 'none';
          holder.querySelector('img').src = '';
        });
      } else {
        const img = this.nextElementSibling;
        if (img && img.tagName === 'IMG') {
          badgeHolders.forEach(holder => {
            holder.style.display = 'block';
            holder.querySelector('img').src = img.src;
          });
        }
      }
    });
  });

  const checked = document.querySelector('input[name="badge"]:checked');
  if (checked) checked.dispatchEvent(new Event('change'));
});

// =================== Badge Colour Change Handling ===================
document.addEventListener('DOMContentLoaded', function () {
  const colorRadios = document.querySelectorAll('input[name="badgeColour"]');
  const badgeHolders = document.querySelectorAll('.badgeHolder');

  colorRadios.forEach((radio) => {
    radio.addEventListener('change', function () {
      const colorValue = this.value;
      badgeHolders.forEach(holder => {
        if (colorValue === 'transparent') {
          holder.style.backgroundColor = 'transparent';
        } else {
          const colorLabel = document.querySelector(`label[for="${this.id}"]`);
          if (colorLabel) {
            holder.style.backgroundColor = colorLabel.style.backgroundColor;
          }
        }
      });
    });
  });

  const checked = document.querySelector('input[name="badgeColour"]:checked');
  if (checked) checked.dispatchEvent(new Event('change'));
});

// =================== Plate Border Colour Change Handling ===================
document.addEventListener('DOMContentLoaded', function () {
  const borderRadios = document.querySelectorAll('input[name="borderColour"]');
  const plateInnerWraps = document.querySelectorAll('.plate_innr_wrp');

  borderRadios.forEach((radio) => {
    radio.addEventListener('change', function () {
      const colorValue = this.value;
      plateInnerWraps.forEach(wrap => {
        if (colorValue === 'transparent') {
          wrap.style.border = 'none';
        } else {
          const colorLabel = document.querySelector(`label[for="${this.id}"]`);
          if (colorLabel) {
            wrap.style.border = `4px solid ${colorLabel.style.backgroundColor}`;
          }
        }
      });
    });
  });

  const checked = document.querySelector('input[name="borderColour"]:checked');
  if (checked) checked.dispatchEvent(new Event('change'));
});

// =================== Surround Image Display Handling ===================
const surroundSelect = document.getElementById('selectSurround');
const qtySelect = document.getElementById('selectSurroundQty');

const plateFrontImg = frontPlate.querySelector('.plate_Surround_img img');
const plateRearImg = rearPlate.querySelector('.plate_Surround_img img');

const surroundImageContainer = document.getElementById('surroundImageContainer');
const surroundImagePreview = document.getElementById('surroundImage');

function updateSurroundImage() {
  const selectedOption = surroundSelect.options[surroundSelect.selectedIndex];
  const qty = parseInt(qtySelect.value);

  frontPlate.classList.remove('show-surround');
  rearPlate.classList.remove('show-surround');
  plateFrontImg.src = '';
  plateRearImg.src = '';

  surroundImageContainer.style.display = 'none';
  surroundImagePreview.src = '';

  if (selectedOption.value !== 'None' && qty > 0) {
    const imgUrl = selectedOption.getAttribute('data-image');
    if (imgUrl) {
      if (qty === 1) {
        plateFrontImg.src = imgUrl;
        frontPlate.classList.add('show-surround');
      } else if (qty === 2) {
        plateFrontImg.src = imgUrl;
        plateRearImg.src = imgUrl;
        frontPlate.classList.add('show-surround');
        rearPlate.classList.add('show-surround');
      }

      surroundImagePreview.src = imgUrl;
      surroundImageContainer.style.display = 'block';
    }
  }
}

surroundSelect.addEventListener('change', updateSurroundImage);
qtySelect.addEventListener('change', updateSurroundImage);

updateSurroundImage(); // Initial Trigger on Page Load
