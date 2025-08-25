class IconService {
  private iconMapPromise: Promise<Record<string, string>> | null = null;

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

  private async _fetchMap(): Promise<Record<string, string>> {
    try {
      const response = await fetch(
        'https://assets-cdn.liebherr.com/assets/api/3b9ef745-bcb3-44ba-8945-b07d2c7fe568/original/icon-map.json'
      );
      if (!response.ok) {
        throw new Error('Network error');
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch:', error);
      return {
        default:
          'https://assets-cdn.liebherr.com/assets/api/313d8c9e-622d-4ab8-984d-4d1bf88ec9ab/original/test-search-icon.svg',
      };
    }
  }
}

export const iconService = new IconService();
