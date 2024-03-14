import PropsTypes from 'prop-types'
const Visited = ({visitedCountrie,count}) => {
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