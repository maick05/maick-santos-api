import { Controller, Get, Render } from '@nestjs/common';

@Controller('index')
export class ViewController {
    @Get()
    @Render('index')
    root(): any {
        return {};
    }
}
