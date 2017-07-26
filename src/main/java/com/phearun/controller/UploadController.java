package com.phearun.controller;

import com.phearun.service.FileUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
public class UploadController {

	private FileUploadService fileUploadService;

	@Autowired
	public UploadController(FileUploadService fileUploadService){
		this.fileUploadService = fileUploadService;
	}

	@PostMapping("/uploads")
	public List<String> upload(@RequestParam List<MultipartFile> files){

		List<String> fileUrls = fileUploadService.upload(files);
		fileUrls.forEach(System.out::println);

		return fileUrls;
	}
	
}
