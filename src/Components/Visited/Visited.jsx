import PropsTypes from 'prop-types'
const Visited = ({visitedCountrie,count}) => {
    localStorage.setItem('visited', JSON.stringify(visitedCountrie));
   return (
        <>
           {/* row 1 */}
      <tr>
        <th>{count++}</th>
        <td>{visitedCountrie.name.common}</td>
        <td>{visitedCountrie.population }</td>
        <td>{visitedCountrie.area}</td>
      </tr> 
        </>
    );
};
Visited.propsTypes = {
    visitedCountrie: PropsTypes.arr
}
export default Visited;