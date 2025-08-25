class IconService {
  private iconMapPromise: Promise<Record<string, string>> | null = null;
  private svgCache: Map<string, Promise<string>> = new Map();

  public getMap(): Promise<Record<string, string>> {
    if (!this.iconMapPromise) {
      this.iconMapPromise = this._fetchMap();
    }
    return this.iconMapPromise;
  }

  public async getUrl(name: string): Promise<string> {
    const map = await this.getMap();
    return map[name] || map.default;
  }

  public getSvgContent(name: string): Promise<string> {
    // Check cache
    if (this.svgCache.has(name)) {
      return this.svgCache.get(name)!;
    }

    // Load SVG content
    const svgPromise = (async () => {
      try {
        const url = await this.getUrl(name);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Icon SVG not found at ${url}`);
        }
        return await response.text();
      } catch (error) {
        // Return a blank or error SVG as a fallback
        return `<svg viewBox="0 0 24 24" style="color:red"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>`;
      }
    })();

    // Cache the new promise
    this.svgCache.set(name, svgPromise);
    return svgPromise;
  }

  private async _fetchMap(): Promise<Record<string, string>> {
    try {
      const response = await fetch(
        'https://assets-cdn.liebherr.com/assets/api/3b9ef745-bcb3-44ba-8945-b07d2c7fe568/original/icon-map.json'
      );
      if (!response.ok) {
        throw new Error('Network error while fetching icon map');
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch icon map:', error);
      return {
        default:
          'https://assets-cdn.liebherr.com/assets/api/313d8c9e-622d-4ab8-984d-4d1bf88ec9ab/original/test-search-icon.svg',
      };
    }
  }
}

export const iconService = new IconService();
