import os
import datetime
import subprocess
from pathlib import Path

def get_git_branch():
    try:
        return subprocess.check_output(['git', 'rev-parse', '--abbrev-ref', 'HEAD']).decode('utf-8').strip()
    except:
        return "no-branch"

def is_text_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            file.read()
        return True
    except UnicodeDecodeError:
        return False
    except:
        return False

def should_ignore(file_path, ignore_patterns):
    rel_path = os.path.relpath(file_path)
    return any(rel_path.startswith(pattern) for pattern in ignore_patterns)

def concatenate_files(root_folder, output_file):
    ignore_patterns = ['.git', 'node_modules', '.next', '.nx', '.angular', '.env', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', 'dist', 'build', 'concatenated']

    with open(output_file, 'w', encoding='utf-8') as outfile:
        # Write header with branch name and timestamp
        branch_name = get_git_branch()
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        outfile.write(f"Branch: {branch_name}\n")
        outfile.write(f"Timestamp: {timestamp}\n\n")

        for root, dirs, files in os.walk(root_folder):
            # Remove hidden folders and specific directories
            dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ignore_patterns]

            for file in files:
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, root_folder)

                if should_ignore(file_path, ignore_patterns):
                    continue

                if is_text_file(file_path):
                    try:
                        with open(file_path, 'r', encoding='utf-8') as infile:
                            content = infile.read()

                        outfile.write(f"\n{'=' * 80}\n")
                        outfile.write(f"File: {rel_path}\n")
                        outfile.write(f"{'=' * 80}\n\n")
                        outfile.write(content)
                        outfile.write("\n\n")
                    except Exception as e:
                        print(f"Error reading file {rel_path}: {str(e)}")

if __name__ == "__main__":
    root_folder = ".."  # one level up from the current directory
    branch_name = get_git_branch()
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    output_file = f"concatenated_{branch_name}_{timestamp}.txt"
    concatenate_files(root_folder, output_file)
    print(f"Concatenation complete. Output file: {output_file}")