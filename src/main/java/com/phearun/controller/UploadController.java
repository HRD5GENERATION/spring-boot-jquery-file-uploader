package com.phearun.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.phearun.service.FileUploadService;

@RestController
public class UploadController {

	private FileUploadService fileUploadService;

	@Autowired
	public UploadController(FileUploadService fileUploadService){
		this.fileUploadService = fileUploadService;
	}

	@PostMapping("/uploads")
	public List<String> upload(@RequestParam List<MultipartFile> files){
		files.forEach(System.out::println);
		
		List<String> fileUrls = fileUploadService.upload(files);
		fileUrls.forEach(System.out::println);

		return fileUrls;
	}
	
}
