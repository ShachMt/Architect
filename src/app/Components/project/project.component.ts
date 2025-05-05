import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  receivedText: string | null = null;
  allImages: string[] = [];
  filteredImages: string[] = []; // מערך סינון

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  // פונקציה לסינון
  filterImages(filter: string): string[] {
    return this.allImages.filter(image => image.includes(filter));
  }

  ngOnInit(): void {
    this.receivedText = this.route.snapshot.paramMap.get('text');

    // נוודא שהטקסט קיים או השתמש במחרוזת ריקה
    const filterText = this.receivedText || ''; // אם הוא null, השתמש במחרוזת ריקה

    this.http.get<string[]>('assets/images.json').subscribe(
      (data) => {
        this.allImages = data;
        // סינון לפי הטקסט שנמסר מה-URL
        this.filteredImages = this.filterImages(filterText);
      },
      (error) => {
        console.error('Failed to load image list', error);
      }
    );
  }
}
 /*
לפי מה שנבחר
-אני צריכה ליצור אוביקט מסוג פרויקט
לעשות מערך של פיילים ולהביא את כל מה שמתאים לאותו פרויקט
*/