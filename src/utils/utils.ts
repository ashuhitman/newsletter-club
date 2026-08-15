
export function getMonthName(
    month: number,
): string {

    return new Intl.DateTimeFormat(
        "en-IN",
        {
            month: "long",
        },
    ).format(
        new Date(
            2026,
            month - 1,
            1,
        ),
    );
}