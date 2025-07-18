import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

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

    @Put(':id')
    update(){
        return 'Update song based on ID'
    }

    @Delete(':id')
    delete(){
        return 'Delete song based on ID'
    }

    @Post()
    create(){
        return 'Create a new song'
    }

}
