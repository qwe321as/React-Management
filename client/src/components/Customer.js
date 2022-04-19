import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CustomerDelete from "./CustomerDelete";

class Customer extends React.Component {
    //실제 그려지는 내용
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>

                <TableCell>
                    <img src={this.props.image} alt="img"></img>
                </TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id} /> </TableCell>
            </TableRow>
        )
    }
}
export default Customer;