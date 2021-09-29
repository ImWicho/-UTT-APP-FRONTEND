import { Component, OnInit } from '@angular/core';
import { TOAST_TYPE } from '@components/toast/i-toast';
import { ToastService } from '@services/toast.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  filesComponent: File[] = [];
  constructor(private service: ToastService) { }

  ngOnInit(): void {

  //   setInterval(() => {
  //     this.service.addToast(    {
  //       title: 'Pedido cancelado',
  //       description: 'El pedido ha sido cancelado.',
  //       timeOut: 10000,
  //       type: TOAST_TYPE.SUCCESS,
  //       isShowed: true,
  //       useDefaultImage: false,
  //       resource: null
  //     });
  //  }, 2000);
  }

  setFiles(event: any): void{
    const files: File[] = event;
    this.filesComponent = files;
  }

}
