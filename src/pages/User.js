import React from "react";
import { useParams } from "react-router";

export default function User() {
    const { firstname, lastname } = useParams();
    return (
        <div>
            User {firstname} {lastname}
        </div>
    )
}
