function WinOpenUrl(Title, Url) {
    new WinBox(Title, {
        class: "modern",
        url: Url,
        background: "var(--maintheme-Primary)"
    });
}

export {WinOpenUrl}