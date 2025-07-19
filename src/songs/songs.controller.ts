import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService){}
    @Get()
    findAll(){
        return this.songsService.findAll()
    }
    
    @Get(':id')
    findOne(){
        return 'fetch song based on id'
    }

    @Put(':id')
    update(){
        return 'Update song based on ID'
    }

    @Delete(':id')
    delete(){
        return 'Delete song based on ID'
    }

    @Post()
    create(@Body() createSongDTO: CreateSongDTO){
       return this.songsService.create(createSongDTO);
    }

}
