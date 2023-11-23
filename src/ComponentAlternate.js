export function ComponentAlternate({someData, otherData}) {
  return (
    <div>
      <h3>{someData} #{otherData}</h3>
      <p>A child component!</p>      
    </div>
  );
}