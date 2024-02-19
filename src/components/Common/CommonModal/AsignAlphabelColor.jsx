// Define colors for each letter
const colorMap = {
    A: "#FF5733",
    B: "#33FF57",
    C: "#FF33E6",
    D: "#33B5FF",
    E: "#FFD733",
    F: "#8C33FF",
    G: "#FF3333",
    H: "#33FFFA",
    I: "#FF33C2",
    J: "#33FF68",
    K: "#FF9333",
    L: "#3380FF",
    M: "#FF33A1",
    N: "#33FF33",
    O: "#FF6A33",
    P: "#3366FF",
    Q: "#FF33FF",
    R: "#33FFD8",
    S: "#FF333E",
    T: "#33FF92",
    U: "#FFBF33",
    V: "#336EFF",
    W: "#FF33B5",
    X: "#33FF47",
    Y: "#FF5733",
    Z: "#3366FF",
  };
  
  // Function to assign color and style for round shapes
  function AssignColorAndStyle({user,type}) {
    const firstLetter = user.name[0].toUpperCase(); // Extract first letter
    const color = colorMap[firstLetter] || "#999999"; // Default to a neutral color if not found
  

    let width = "35px"
    let height = "35px"

    // conditional rendering
    if(type === "filter"){
      width = "25px"
      height = "25px"
    }

    // Apply the color to your UI element (e.g., background, label)
    user.displayColor = color;
    user.roundShapeStyle = {
      backgroundColor: color,
      borderRadius: "50%",
      color: "#ffffff", // You might adjust the text color for readability
      padding: "8px",
      width:width,
      height:height,
      display: "flex",
      justifyContent:"center",
      alignItems:"center"

    };

    return (
        
        <div style={user.roundShapeStyle}>
                {firstLetter}
        </div>
    )
  
  }
  
  export default AssignColorAndStyle