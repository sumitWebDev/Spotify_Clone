import { Controller, Get } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Get()
    findAll(){
        return 'find all songs'
    }
    @Get(':id')
    findOne(){
        return 'fetch song based on id'
    }
}
