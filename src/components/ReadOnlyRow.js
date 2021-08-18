import React from 'react'

const ReadOnlyRow = ({ ravi, handleEditClick, handleDeleteClick }) => {
    return (
        
        <tr>
            <td>{ravi.fullName}</td>
            <td>{ravi.address}</td>
            <td>{ravi.phoneNumber}</td>
            <td>{ravi.email}</td>
            <td>
                <button
                    type="button"
                    onClick={(event) => handleEditClick(event, ravi)}
                >
                    Edit
                </button>
                <button type="button" onClick={() => handleDeleteClick(ravi.id)}>
                    Delete
                </button>

            </td>
        </tr>
        
    

    )
}

export default ReadOnlyRow
