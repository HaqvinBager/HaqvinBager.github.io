const PageIndicator = Object.freeze
({
    HOME: 1,
    KING: 2,
    TGA: 3,
    CONTACT: 4,
    PERSONAL: 5
})

function OpenPage(index)
{
    switch(index)
    {

        case PageIndicator.HOME:
            window.location.href = "https://haqvinbager.github.io";
            break;
        case PageIndicator.KING:
            window.location.href = "https://haqvinbager.github.io/King";
            break;
        case PageIndicator.TGA:
            window.location.href = "https://haqvinbager.github.io/TheGameAssembly";
            break;
        case PageIndicator.CONTACT:
            window.location.href = "https://haqvinbager.github.io/Contact";
            break;
        case PageIndicator.PERSONAL:
            window.location.href = "https://haqvinbager.github.io/Personal";
            break;
        default:
            window.location.href = "https://haqvinbager.github.io";
            break;
    }
}