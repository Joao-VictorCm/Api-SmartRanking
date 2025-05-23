import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dto/criar-jogador.dto';

@Controller('jogadores')
export class JogadoresController {
  @Post()
  async criarAtualizarJogador(@Body() criarJogadorDto: CriarJogadorDto) {
    const { email } = criarJogadorDto;
    return JSON.stringify(`{
      nome: ${email},
    }`);
  }
}
