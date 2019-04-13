import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle, Table } from "reactstrap";
import SimpleTarget from './SimpleTarget';
import moment from 'moment';

class TargetList extends Component {

  render() {
    const { targets } = this.props;
    const grouped = groupBy(targets, "name");
    const renderList = [];
    for (var property in grouped) {
      if (grouped.hasOwnProperty(property)) {
        renderList.push({
          name: property,
          number: grouped[property].length,
          color:grouped[property][0].color,
          createdAt:moment(grouped[property][0].createdAt).fromNow()
        });
      }
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Marks on this picture</CardTitle>
        </CardHeader>
        <CardBody>
          <Table className="tablesorter" responsive>
            <thead className="text-primary">
              <tr>
                <th>Color</th>
                <th>Name</th>
                <th>Last change</th>
                <th className="text-center">Number</th>
              </tr>
            </thead>
            <tbody>
              {renderList &&
                renderList.length > 0 &&
                renderList.map(({name, number, color, createdAt}) => {
                  return (
                    <tr key={name}>
                      <td><SimpleTarget color={color}/></td>
                      <td>{name}</td>
                      <td>{createdAt}</td>
                      <td className="text-center">{number}</td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
            <tr>
                <th></th>
                <th></th>
                <th>Total</th>
                <th className="text-center">{targets.length}</th>
              </tr>
            </tfoot>
          </Table>
        </CardBody>
      </Card>
    );
  }
}
const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item]
    }),
    {}
  );

export default TargetList;
