import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Customer extends React.Component {
    //실제 그려지는 내용
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>

                <TableCell>
                    <img src={this.props.imge} alt="img"></img>
                </TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>

            </TableRow>
        )
    }
}
export default Customer;