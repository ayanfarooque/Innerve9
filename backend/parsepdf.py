from PyPDF2 import PdfReader

def extract_pdf_text_to_file(file_path, output_file):
    """Extract text from a PDF file and write it to a text file."""
    reader = PdfReader(file_path)
    with open(output_file, "w") as f:
        for page_number, page in enumerate(reader.pages, start=1):
            f.write(f"Page {page_number}:\n")
            f.write(page.extract_text())
            f.write("\n" + "="*50 + "\n")

if __name__ == "__main__":
    pdf_path = "doctors_schedule.pdf"
    output_file = "doctor_data.txt"

    extract_pdf_text_to_file(pdf_path, output_file)
    print(f"Text extracted and written to {output_file}")