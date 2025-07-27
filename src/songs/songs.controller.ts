import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService){}
    @Get()
    findAll(){
        try{
            return this.songsService.findAll()
        }
        catch(e){
            //console.log(e)
            throw new HttpException(
                'Server error by Dev',
                HttpStatus.INTERNAL_SERVER_ERROR,{
                    cause: e,
                }
            )
        }
    }
    
    @Get(':id')
    findOne(
        @Param('id',
        new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}),)
        id: number,
        ){
        return `fetch song based on id ${typeof id}`
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
