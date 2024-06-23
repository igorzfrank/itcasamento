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
  var cpfPix = document.createElement("p");
  var nomePix = document.createElement("p");
  var bancoPix = document.createElement("p");

  $(closeModal).text("X").addClass("closeModal");
  $(imgModal).attr("src", $(img).attr("src"));
  $(titleModal).text(`${title.text()}`);
  $(valorModal).text(`R$: ${value.text()},00`);
  $(qrCode).attr("src", `./imgs/img-pix-${value.text()}.png`);
  $(copyButton).text("Copiar Chave PIX").addClass("copyButton");
  $(containerModal).addClass("containerModal");
  $(modal).addClass("modal").append(closeModal).append(containerModal);
  $(cpfPix).text("PIX: 077.024.419-09");
  $(nomePix).text("Igor Frank Moreno");
  $(bancoPix).text("Banco Inter");
  $(containerModal)
    .append(imgModal)
    .append(titleModal)
    .append(valorModal)
    .append(qrCode)
    .append(copyButton)
    .append(cpfPix)
    .append(nomePix)
    .append(bancoPix);

  console.log(value.text());
  $("body").append(modal);

  $(".closeModal").on("click", function () {
    $(modal).remove();
  });

  $(".copyButton").on("click", function () {
    let chavePix = `07702441909`;

    navigator.clipboard
      .writeText(chavePix)
      .then(() => {
        console.log("Chave PIX copiada para a área de transferência");
      })
      .catch((err) => {
        console.error("Erro ao copiar a chave PIX: ", err);
      });
  });
});
