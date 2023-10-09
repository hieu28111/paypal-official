const ctn1 = document.querySelector(".container1");
const caidat = document.querySelector(".caidat");
const thoat = document.querySelector(".thoat");

caidat.addEventListener("click", function () {
  ctn1.classList.remove("hidden");
  caidat.classList.add("hidden");
});
thoat.addEventListener("click", function () {
  ctn1.classList.add("hidden");
  caidat.classList.remove("hidden");
});

const ok = document.querySelector(".ok");
const sodu = document.querySelector(".sodu");

const send = document.querySelector(".send");

ok.addEventListener("click", function () {
  let nhapusd = Number(document.querySelector(".nhapusd").value);

  sodu.textContent = nhapusd + ",00 $";
});

send.addEventListener("click", function () {
  const x = Number(document.querySelector(".USD").value);
  let nhapusd = Number(document.querySelector(".nhapusd").value);
  const z = nhapusd - x;
  nhapusd = document.querySelector(".nhapusd").value = z;

  sodu.textContent = z + ",00 $";
  let timerInterval;
  Swal.fire({
    title: "Please wait",

    timer: 2300,

    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire(
        "Send Money is Completed",
        "You sent " + x + ",00 $",
        "success"
      );
    }
  });
});
