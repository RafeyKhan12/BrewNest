import { NextResponse } from "next/server";

export async function GET() {
    try {
        const coffeeList = [
            {
                id: 1,
                name: "Coffee",
                img: "url"
            },
            {
                id: 2,
                name: "Coffee",
                img: "url"
            },
            {
                id: 3,
                name: "Coffee",
                img: "url"
            },
            {
                id: 4,
                name: "Coffee",
                img: "url"
            },
            {
                id: 5,
                name: "Coffee",
                img: "url"
            },
        ]
        return NextResponse.json({
            success: true,
            message: "Data fetched successfully",
            coffeeList
        },
        {
            status: 200
        }
    );
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        },
        {
            status: 400
        }
    )
    }
}