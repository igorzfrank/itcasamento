$(".choice").on("click", function () {
  var img = $(this).closest(".box").find("img");
  var title = $(this).closest(".box").find(".box-title");
  var value = $(this).closest(".box").find(".value");

  var modal = document.createElement("div");
  var closeModal = document.createElement("button");
  var containerModal = document.createElement("div");
  var imgModal = document.createElement("img");
  var titleModal = document.createElement("h1");
  var valorModal = document.createElement("h4");
  var qrCode = document.createElement("img");
  var copyButton = document.createElement("button");

  $(closeModal).text("X").addClass("closeModal");
  $(imgModal).attr("src", $(img).attr("src"));
  $(titleModal).text(`${title.text()}`);
  $(valorModal).text(`${value.text()}`);
  $(qrCode).attr("src", `./imgs/img-pix-${value.text()}.png`);
  $(copyButton).text("Copiar Chave").addClass("copyButton");
  $(containerModal).addClass("containerModal");
  $(modal).addClass("modal").append(closeModal).append(containerModal);

  $(containerModal)
    .append(imgModal)
    .append(titleModal)
    .append(valorModal)
    .append(qrCode)
    .append(copyButton);

  console.log(value.text());
  $("body").append(modal);

  $(".closeModal").on("click", function () {
    $(modal).remove();
  });

  $(".copyButton").on("click", function () {
    if (value.text() == "50") {
      let chavePix =
        "00020101021126460014br.gov.bcb.pix0111077024419090209Presente Casamento520400005303986540650.005802BR5917IGOR FRANK MORENO6008SAO JOSE62070503***6304A2A8";
      navigator.clipboard
        .writeText(chavePix)
        .then(() => {
          console.log("Chave PIX copiada para a área de transferência");
        })
        .catch((err) => {
          console.error("Erro ao copiar a chave PIX: ", err);
        });
    }
  });
});
