export default function(direction) {
  const newestMessage = document.querySelector(
    `.${direction}-message:last-child`
  );
  newestMessage.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "end"
  });
}
