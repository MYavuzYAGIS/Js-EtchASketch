# Js-EtchASketch


CSS Shake Animation :


/* ====== ANIMATIONS ====== */
.shake {
  animation: .25s linear .1s 5 forwards shake;
}
@keyframes shake {
  0% {
    transform: translateX(0rem);
  }
  25% {
    transform: translateX(-2rem);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(2rem);
  }
  100% {
    transform: translateX(0rem);
  }
}