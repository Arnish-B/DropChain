    import React from "react";

    function Table(props) {
    return (
    <table
        className="table-sm table-bordered text-monospace"
        style={{ width: "100%", maxHeight: "450px" }}
    >
        <thead style={{ fontSize: "15px" }}>
        <tr className="bg-dark text-white">
            <th scope="col" style={{ width: "10px" }}>
            id
            </th>
            <th scope="col" style={{ width: "200px" }}>
            name
            </th>
            <th scope="col" style={{ width: "230px" }}>
            description
            </th>
            <th scope="col" style={{ width: "120px" }}>
            type
            </th>
            <th scope="col" style={{ width: "90px" }}>
            size
            </th>
            <th scope="col" style={{ width: "90px" }}>
            date
            </th>
            <th scope="col" style={{ width: "120px" }}>
            uploader/view
            </th>
            <th scope="col" style={{ width: "120px" }}>
            hash/view/get
            </th>
        </tr>
        </thead>
        {props.files &&
        props.files.map((file, key) => {
            return (
            <thead style={{ fontSize: "11px" }} key={key}>
                <tr>
                <td>{file.fileId}</td>
                <td>{file.fileName}</td>
                <td>{file.fileDescription}</td>
                <td>{file.fileType}</td>
                <td>{convertBytes(file.fileSize)}</td>
                <td>
                    {moment.unix(file.uploadTime).format("h:mm:ss A M/D/Y")}
                </td>
                <td>
                    <a
                    href={"https://etherscan.io/address/" + file.uploader}
                    rel="noopener noreferrer"
                    target="_blank"
                    >
                    {file.uploader.substring(0, 10)}...
                    </a>
                </td>
                <td>
                    <a
                    href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                    rel="noopener noreferrer"
                    target="_blank"
                    >
                    {file.fileHash.substring(0, 10)}...
                    </a>
                </td>
                </tr>
            </thead>
            );
        })}
    </table>
    );
    }

    export default Table;
