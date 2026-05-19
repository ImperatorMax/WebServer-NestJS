import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Render,
  Redirect,
  ParseIntPipe,
} from '@nestjs/common';

class GameEntity {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly price: number,
    public readonly img: string,
    public readonly genre: string = '',
  ) {}
}

class CartItemEntity {
  constructor(
    public readonly gameId: number,
    public readonly title: string,
    public readonly price: number,
    public readonly img: string,
  ) {}
}

@Controller('market')
export class MarketController {
  private games: GameEntity[] = [
    new GameEntity(
      1,
      'Deltarune',
      950,
      'https://cdn2.steamgriddb.com/thumb/28c965a5ca78dcc84ae82ffb568f80e6.jpg',
      'RPG',
    ),
    new GameEntity(
      2,
      'Space Station 14',
      0,
      'https://tse1.mm.bing.net/th/id/OIP.AsDiqHZ5hvHmtqQRnTxf2QHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
      'Simulator',
    ),
    new GameEntity(
      3,
      'Hollow Knight',
      499,
      'https://cdn2.steamgriddb.com/thumb/0d1e5791e6d9f5d290a9eedc1d825e1e.jpg',
      'Indie',
    ),
    new GameEntity(
      4,
      'ULTRAKILL',
      529,
      'https://cdn2.steamgriddb.com/thumb/f79e78a787776a1cfe7c4e82c7cfd955.jpg',
      'FPS',
    ),
    new GameEntity(5, 'Doom Eternal', 1299, '/images/doom.jpg', 'FPS'),
  ];

  private cart: CartItemEntity[] = [];

  @Get()
  @Render('market')
  public getMarket() {
    const cartTotal = this.cart.reduce((sum, item) => sum + item.price, 0);
    const cartGameIds = this.cart.map((c) => c.gameId);
    return {
      games: this.games,
      gamesCount: this.games.length,
      cart: this.cart,
      cartCount: this.cart.length,
      cartTotal,
      cartGameIds,
    };
  }

  // Добавить игру в каталог
  @Post('/add-game')
  @Redirect('/market', 302)
  public addGame(
    @Body() body: { title: string; price: string; img: string; genre: string },
  ) {
    const newId =
      this.games.length > 0 ? Math.max(...this.games.map((g) => g.id)) + 1 : 1;
    this.games.push(
      new GameEntity(
        newId,
        body.title,
        Number(body.price) || 0,
        body.img || '/images/default.jpg',
        body.genre || '',
      ),
    );
    return {};
  }

  // Удалить игру из каталога
  @Post('/delete-game/:id')
  @Redirect('/market', 302)
  public deleteGame(@Param('id', ParseIntPipe) id: number) {
    this.games = this.games.filter((g) => g.id !== id);
    this.cart = this.cart.filter((c) => c.gameId !== id);
    return {};
  }

  // Добавить в корзину
  @Post('/cart/add/:id')
  @Redirect('/market', 302)
  public addToCart(@Param('id', ParseIntPipe) id: number) {
    const game = this.games.find((g) => g.id === id);
    if (game && !this.cart.find((c) => c.gameId === id)) {
      this.cart.push(
        new CartItemEntity(game.id, game.title, game.price, game.img),
      );
    }
    return {};
  }

  // Удалить из корзины
  @Post('/cart/remove/:id')
  @Redirect('/market', 302)
  public removeFromCart(@Param('id', ParseIntPipe) id: number) {
    this.cart = this.cart.filter((c) => c.gameId !== id);
    return {};
  }

  // Очистить корзину
  @Post('/cart/clear')
  @Redirect('/market', 302)
  public clearCart() {
    this.cart = [];
    return {};
  }
}
