class HomePageData {
    public name: string;
    public href: URL;
    public iconURL: string;

    constructor(name: string,href:URL,iconURL:string) {
        this.name = name;
        this.href = href;
        this.iconURL = iconURL;
    }
}

export {HomePageData}