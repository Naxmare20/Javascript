let mois = prompt("quel mois somme nous");
switch (mois) {
  case "1":
    if (mois === "1") {
      document.write("Il y a 31 jours dans le mois de janvier");
    }
    break;
  case "2":
    if (mois === "2") {
      document.write("Il y a 28 jours dans le mois de fevrier");
    }
    break;
  case "3":
    if (mois === "3") {
      document.write("Il y a 31 jours dans le mois de mars");
    }
    break;
  case "4":
    if (mois === "4") {
      document.write("Il y a 30 jours dans le mois d'avril");
    }
    break;
  case "5":
    if (mois === "5") {
      document.write("Il y a 31 jours dans le mois de Mai");
    }
    break;
  case "6":
    if (mois === "6") {
      document.write("Il y a 30 jours dans le mois de Juin");
    }
    break;
  case "7":
    if (mois === "7") {
      document.write("Il y a 31 jours dans le mois de Juillet");
    }
    break;
  case "8":
    if (mois === "8") {
      document.write("Il y a 31 jours dans le mois de Aout");
    }
    break;
  case "9":
    if (mois === "9") {
      document.write("Il y a 30 jours dans le mois de Septempbre");
    }
    break;
  case "10":
    if (mois === "10") {
      document.write("Il y a 31 jours dans le mois de Octobre");
    }
    break;
  case "11":
    if (mois === "11") {
      document.write("Il y a 30 jours dans le mois de Novembre");
    }
    break;
  case "12":
    if (mois === "12") {
      document.write(
        "Il y a 31 jours dans le mois de Decembre , c'est aussi mon anniversaire (Nathan)"
      );
    }
    break;
  default:
    document.write("Tu n'a pas entrez en mois, ou quelque chose demander");
}
