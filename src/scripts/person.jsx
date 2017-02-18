/** jsx React.DOM **/

var PersonTable =
    React.createClass({
        getInitialState: function() {
            return {
                data: [{ "id": 1, "fname": "Manish", "lname": "Crosswite" }, { "id": 2, "fname": "Tom", "lname": "Soyer" }, { "id": 3, "fname": "Richard", "lname": "Broslovsky" }, { "id": 4, "fname": "Stan", "lname": "Marsh" }]
            }
        },
        render: function() {
            return (
                    <table>
                        <tbody>
                            {this.state.data.map(function(person, i) {
                                return <PersonRow key={i} data={person} />
                            })}
                        </tbody>
                    </table>
                )
        }
    });


var PersonRow =
    React.createClass({
        render: function () {
            return (
                    <tr>
                        <td>{this.props.data.id}</td>
                        <td>{this.props.data.fname}</td>
                        <td>{this.props.data.lname}</td>
                    </tr>
                )
        }
    });