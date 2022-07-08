export const getColor = (typeP: string): string => {
  switch(typeP){
    case "grass": return "#a7c957";
    case "fire": return "#EE8130";
    case "electric": return "#F7D02C";
    case "water": return "#6390F0";
    case "ground": return "#E2BF65";
    case "rock": return "#B6A136";
    case "fairy": return "#D685AD";
    case "poison": return "#A33EA1";
    case "bug": return "#A6B91A";
    case "dragon": return "#6F35FC";
    case "psychic": return "#F95587";
    case "flying": return "#A98FF3";
    case "fighting": return "#C22E28";
    case "normal": return "#A8A77A";
    case "ice": return "#96D9D6";
    case "ghost": return "#735797";
    case "dark": return "#705746";
    case "steel": return "#B7B7CE";
    case "unknown": return "#8D99AE";
    case "shadow": return "#212529";
    default: 
      return "#FFFFFF00";
  }
}